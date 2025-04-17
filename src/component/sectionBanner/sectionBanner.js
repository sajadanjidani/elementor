import styles from './sectionBanner.module.css'

const SectionBanner = ({children, color}) => {
    return(
        <div>
            <section class="hero">

                <svg class="wave-bottom" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill={color} fill-opacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>

                <div class={styles.heroContent}>
                    {children}
                </div>

                <svg class={styles.waveTop} viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill={color} fill-opacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>
                
            </section>
        </div>
    )
}

export default SectionBanner