import Goals from './Goals.tsx'

interface GoalListProps {
    challengeList : {
        title: string;
        description: string;
        id: number
    }[]
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