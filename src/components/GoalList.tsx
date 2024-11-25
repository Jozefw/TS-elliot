import Goals from './Goals.tsx';
import {type Challenges} from '../Apps.tsx';

interface GoalListProps {
    challengeList : Challenges[]
}

export default function GoalList({challengeList}:GoalListProps) {
    return (
        <ul>
            {challengeList.map((challengeItem) => (<li key={challengeItem.id}>
                <Goals title={challengeItem.title}>
                    <p>{challengeItem.description}</p>
                </Goals>
            </li>))}
        </ul>
    )
}