interface taskProps {
    content: string;
}

export function Task({content}: taskProps) {
    return(
        <h1>{content}</h1>
    )
}