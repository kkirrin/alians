import { Helmet } from "react-helmet";
import styles from '../styles/forClients.module.css';

import { ServiceHero } from '../components'

import { HaveQuestion } from '../sections/';
export default function ForClients() {
    return (
        <>
            <Helmet>
                <title>Поставщикам</title>
                <meta name="description" content="Описание вашей компании, услуг и уникальных преимуществ." />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="О компании - Ваша компания" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://example.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card (for Twitter sharing) */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="О компании - Ваша компания" />
                <meta name="twitter:description" content="Описание вашей компании и услуг." />
                <meta name="twitter:image" content="URL_картинки_для_шеринга" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://example.com/about" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>


            <ServiceHero
                image="../info/workers.png"
            />
            

            <section className={styles.section}>
                <div className="container">
                    <h2 className="title_blue toggle_color">Сотрудникам</h2>
                
                    <div className={styles.content}>
                        <p>
                            Группа компаний Восточный Альянс динамично развивающаяся компания. Наша основа работы – умение работать в команде. Команда по нашему мнению — это группа единомышленников, сотрудничающих друг с другом для достижения намеченных общих целей. Наши кадры – опора всего бизнеса. Мы ценим своих сотрудников и поэтому заинтересованы в постоянном развитии команды: тренинги, обучение, повышение квалификации, семинары.
                          
                            Если Вы хотите стать частью команды, отправляйте резюме на <a href="mailto:info@va.eco">info@va.eco</a>
                        </p>
                    </div>
                </div>
            </section>

            <HaveQuestion />


        
        </>
    )
}
