import styles from './Infos.module.css'

interface infosProps {
    title: string
    subtitle: string
}

export default function Infos({ title, subtitle }: infosProps) {
    return (
        <div className={styles.info}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}
