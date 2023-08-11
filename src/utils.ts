export function splitWords(str: string): string[] {
    const regex = /[A-Z][a-z]*/g // 正则表达式匹配大写字母开头的单词
    return str.match(regex) || [] // 返回匹配到的单词数组，如果没有匹配到则返回空数组
}
