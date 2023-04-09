export type Data = {
    category: string
    score: number
    icon: string
}

export type StyledData = Data & {
    key: string  // numbered strings -> "1", "2"...
    
    // CSS classes that will have "key" appended to them for rendering
    summaryContentContainer: string
    summaryContentName: string
}