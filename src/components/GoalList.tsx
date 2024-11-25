import Goals from './Goals.tsx';
import {type Challenges} from '../App.tsx';

interface GoalListProps {
    challengeList : Challenges[];
    onDeleteChallenge: (id : number) => void;
}

export default function GoalList({challengeList,onDeleteChallenge}:GoalListProps) {
    return (
        <ul>
            {challengeList.map((challengeItem) => (<li key={challengeItem.id}>
                <Goals id={challengeItem.id} onDelete={onDeleteChallenge} title={challengeItem.title}>
                    <p>{challengeItem.description}</p>
                </Goals>
            </li>))}
        </ul>
    )
}