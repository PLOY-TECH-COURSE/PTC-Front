import * as S from "../pages/write/style.jsx"
import CodeHighlighter from "../components/codeColor/index.jsx";
import PdfSwiper from "../components/pdfSlider/index.jsx";
import Result from "../components/Result/index.jsx";
export default function makeDocument(text = "") {
    const tagPatterns = [
        {
            pattern:  /<제목1>\n?([\s\S]*?)\n?<\/제목1>/,
            component: (text) => <S.H1>{text}</S.H1>
        },
        {
            pattern:  /<제목2>\n?([\s\S]*?)\n?<\/제목2>/,
            component: (text) => <S.H2>{text}</S.H2>
        },
        {
            pattern:  /<제목3>\n?([\s\S]*?)\n?<\/제목3>/,
            component: (text) => <S.H3>{text}</S.H3>
        },
        {
            pattern:  /<제목4>\n?([\s\S]*?)\n?<\/제목4>/,
            component: (text) => <S.H4>{text}</S.H4>
        },
        {
            pattern: /<강조>\n?([\s\S]*?)\n?<\/강조>/,
            component: (text) => <strong>{text}</strong>
        },
        {
            pattern: /<밑줄>(.*?)<\/밑줄>/,
            component: (text) => <S.underLine>{text}</S.underLine>
        },
        {
            pattern:  /<기울임>\n?([\s\S]*?)\n?<\/기울임>/,
            component: (text) => <i>{text}</i>,
        },
        {
            pattern:  /<취소선>\n?([\s\S]*?)\n?<\/취소선>/,
            component: (text) => <S.cancelLine>{text}</S.cancelLine>,
        },
        {
            pattern:/<줄>(.*?)<\/줄>/,
            component: () => <S.hr></S.hr>
        },
        {
            pattern:/<이미지 src="(.*?)"><\/이미지>/,
            component : (src) => {
                if(!src) return null
                return <S.img src={src[0].props.children} alt={"추가된이미지"} />
            }
        },
        {
          pattern:/<코드>\n?([\s\S]*?)\n?<\/코드>/,
          component: (text) => {
            return (
              <CodeHighlighter language={"markup"} code={text} />
            );
          }
        },
        {
            pattern:/<코드\s+언어="(.*?)">\n?([\s\S]*?)\n?<\/코드>/,
            component: (language, text) => {
              return (
                <CodeHighlighter language={language} code={text} />
              );
            }
        },
        {
            pattern:/<Pdf src="(.*?)"><\/Pdf>/,
            component: (src) => {
              if (!src) return null;
              const randomId = Math.random().toString(36).substring(2, 8);

              return <PdfSwiper swiperId={randomId} url={src[0].props.children} />;
            }
        },
      {
        pattern: /<결과 src="(.*?)"><\/결과>/,
        component: (src) => {
          if (!src) return null;
          return (
            <Result ranking={src[0].props.children} />
          );
        }
      }
    ];

    function parseText(inputText) {
        if (!inputText) return null;

        // 가장 먼저 매칭되는 태그를 찾음
        let earliestMatch = null;
        let matchComponent = null;

        tagPatterns.forEach(({ pattern, component }) => {
            const match = inputText.match(pattern);

            if (match && (!earliestMatch || match.index < earliestMatch.index)) {
                earliestMatch = match;
                matchComponent = component;
            }
        });


        // 매칭된 태그가 없으면 단순 텍스트 반환
        if (!earliestMatch){
            return inputText.split("\n").map((line, index) => (
                <S.div2>{line}</S.div2>
            ));
        }

      const [fullMatch, ...groups] = earliestMatch;
      const prefixText = inputText.slice(0, earliestMatch.index);
      const suffixText = inputText.slice(earliestMatch.index + fullMatch.length);

      let componentResult = null;
      if (groups.length === 2) {
        componentResult = matchComponent(groups[0], parseText(groups[1]));
      } else {
        componentResult = matchComponent(parseText(groups[0]));
      }

      return (
        <>
          {prefixText && parseText(prefixText)}
          {componentResult}
          {suffixText && parseText(suffixText)}
        </>
      );
    }
    // cleanText = text.replace(/(<코드>)([\s\S]*?)(<\/코드>)/g, (_, start, content, end) => {
    //     return start + content.replace(/\n/g, '<<br>>') + end;
    // });
    // const lines = text.split("\n").map((line, index) => (
    //     <S.div2 key={index}>
    //         {parseText(line)}
    //     </S.div2>
    // ));
    return <S.div>{parseText(text)}</S.div>;
}