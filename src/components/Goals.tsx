interface GoalProps {
    title:string;
    description:string
}


export default function Goals({title,description}:GoalProps) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
                <button>Delete</button>
        </article>
    )
}