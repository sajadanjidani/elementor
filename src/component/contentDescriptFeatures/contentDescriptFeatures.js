import styles from './contentDescriptFeatures.modlue.css'

const ContentDescriptFeatures = ({title, content}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default ContentDescriptFeatures