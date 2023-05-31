
interface Props {
    titulo: string;
    descricao: string;
}

export default function Legenda({ titulo, descricao }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <li className="flex gap-1">
                    <span className="font-bold">{titulo}</span>
                    <span>-</span>
                    <span>{descricao}</span>
                </li>
            </div>
        </div>
    )
}