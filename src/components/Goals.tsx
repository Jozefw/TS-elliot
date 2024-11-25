import { type ReactNode } from 'react';
interface GoalProps {
    id:number;
    title:string;
    children: ReactNode;
    onDelete:(id:number) => void;
}

export default function Goals({title,children,onDelete,id}:GoalProps) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
            </div>
                <p>{children}</p>
                <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}