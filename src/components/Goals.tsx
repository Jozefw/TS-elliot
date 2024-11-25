import { type ReactNode } from 'react';
interface GoalProps {
    title:string;
    children: ReactNode
}


export default function Goals({title,children}:GoalProps) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
            </div>
                <p>{children}</p>

                <button>Delete</button>
        </article>
    )
}