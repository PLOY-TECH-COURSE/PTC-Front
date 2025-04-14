import * as S from "../pages/write/style.jsx"
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
            component : (src) => {
                return <S.Code><code>{src}</code></S.Code>
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

        const [fullMatch, innerText] = earliestMatch;
        const prefixText = inputText.slice(0, earliestMatch.index);
        const suffixText = inputText.slice(earliestMatch.index + fullMatch.length);

        return (
            <>
                {prefixText && parseText(prefixText)}
                {matchComponent(parseText(innerText))}
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