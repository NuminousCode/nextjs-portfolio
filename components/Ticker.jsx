import React , {useRef} from "react";
import styles from "../styles/Ticker.module.css";
import useImageIntersectionObserver from "../helpers/useImageIntersectionObserver";
import useDynamicIconSize from "../helpers/dynamicIconSize";
import useDynamicFontSize from "../helpers/dynamicFontSize";

const Ticker = (data) => {
    // Image URL extraction
    const nextIconUrl = data.data[6];
    const reactIconUrl = data.data[7];
    const angularIconUrl = data.data[11];
    const bootstrapIconUrl = data.data[14];
    const muiIconUrl = data.data[15];
    const htmlIconUrl = data.data[9];
    const cssIconUrl = data.data[10];
    const jsIconUrl = data.data[8];
    const cloudflareUrl = data.data[26];
    const vercelUrl = data.data[27];
    const sqlUrl = data.data[20];
    const mySqlUrl = data.data[21];
    const sequelizeUrl = data.data[17];
    const expressUrl = data.data[22];
    const nodeUrl = data.data[12];
    const mongoUrl = data.data[19];
    const mongooseUrl = data.data[18];
    const cSharpUrl = data.data[24];
    const javaUrl = data.data[25];
    const efCoreUrl = data.data[13];
    const gitUrl = data.data[34];

    const tickerRef = useRef(null)

    // Custom hook invocation
    useDynamicIconSize([`.${styles.invertIcon}`], 200, 12, 0.05);
    useDynamicFontSize([`.${styles.item}`], 6, 50, 0.01);
    useImageIntersectionObserver([tickerRef], .2, 250);

    return (
        <div className={styles.containerMain} ref={tickerRef}>
            <div className={styles.tickerContent1}>
                <div className={styles.item}>
                    <img src={expressUrl} alt="Express.js" className={styles.invertIcon} />
                    <div>Express.js</div>
                </div>
                <div className={styles.item}>
                    <img src={cSharpUrl} alt="C#" className={styles.invertIcon} />
                    <div>C#</div>
                </div>
                <div className={styles.item}>
                    <img src={angularIconUrl} alt="Angular" className={styles.invertIcon} />
                    <div>Angular</div>
                </div>
                <div className={styles.item}>
                    <img src={bootstrapIconUrl} alt="Bootstrap" className={styles.invertIcon} />
                    <div>Bootstrap</div>
                </div>
                <div className={styles.item}>
                    <img src={muiIconUrl} alt="Material-UI" className={styles.invertIcon} />
                    <div>Material-UI</div>
                </div>
                <div className={styles.item}>
                    <img src={htmlIconUrl} alt="HTML" className={styles.invertIcon} />
                    <div>HTML</div>
                </div>
                <div className={styles.item}>
                    <img src={cssIconUrl} alt="CSS" className={styles.invertIcon} />
                    <div>CSS</div>
                </div>
                <div className={styles.item}>
                    <img src={jsIconUrl} alt="JavaScript" className={styles.invertIcon} />
                    <div>JavaScript</div>
                </div>
                <div className={styles.item}>
                    <img src={vercelUrl} alt="Vercel" className={styles.invertIcon} />
                    <div>Vercel</div>
                </div>
                <div className={styles.item}>
                    <img src={sqlUrl} alt="SQL Server" className={styles.invertIcon} />
                    <div>SQL Server</div>
                </div>
                <div className={styles.item}>
                    <img src={mySqlUrl} alt="MySQL" className={styles.invertIcon} />
                    <div>MySQL</div>
                </div>
                <div className={styles.item}>
                    <img src={sequelizeUrl} alt="Sequelize" className={styles.invertIcon} />
                    <div>Sequelize</div>
                </div>
                <div className={styles.item}>
                    <img src={nodeUrl} alt="Node.js" className={styles.invertIcon} />
                    <div>Node.js</div>
                </div>
                <div className={styles.item}>
                    <img src={mongoUrl} alt="MongoDB" className={styles.invertIcon} />
                    <div>Mongo DB</div>
                </div>
                <div className={styles.item}>
                    <img src={mongooseUrl} alt="Mongoose" className={styles.invertIcon} />
                    <div>Mongoose</div>
                </div>
                <div className={styles.item}>
                    <img src={efCoreUrl} alt=".NET" className={styles.invertIcon} />
                    <div>.NET</div>
                </div>
                <div className={styles.item}>
                    <img src={cloudflareUrl} alt="Cloudflare" className={styles.invertIcon} />
                    <div>Cloudflare</div>
                </div>
                <div className={styles.item}>
                    <img src={javaUrl} alt="Java" className={styles.invertIcon} />
                    <div>Java</div>
                </div>
                <div className={styles.item}>
                    <img src={gitUrl} alt="Git" className={styles.invertIcon} />
                    <div>Git</div>
                </div>
                <div className={styles.item}>
                    <img src={nextIconUrl} alt="Next.js" className={styles.invertIcon} />
                    <div>Next.js</div>
                </div>
                <div className={styles.item}>
                    <img src={reactIconUrl} alt="React" className={styles.invertIcon} />
                    <div>React</div>
                </div>
            </div>
            <div className={styles.tickerContent2}>
                <div className={styles.item}>
                    <img src={expressUrl} alt="Express.js" className={styles.invertIcon} />
                    <div>Express.js</div>
                </div>
                <div className={styles.item}>
                    <img src={cSharpUrl} alt="C#" className={styles.invertIcon} />
                    <div>C#</div>
                </div>
                <div className={styles.item}>
                    <img src={angularIconUrl} alt="Angular" className={styles.invertIcon} />
                    <div>Angular</div>
                </div>
                <div className={styles.item}>
                    <img src={bootstrapIconUrl} alt="Bootstrap" className={styles.invertIcon} />
                    <div>Bootstrap</div>
                </div>
                <div className={styles.item}>
                    <img src={muiIconUrl} alt="Material-UI" className={styles.invertIcon} />
                    <div>Material-UI</div>
                </div>
                <div className={styles.item}>
                    <img src={htmlIconUrl} alt="HTML" className={styles.invertIcon} />
                    <div>HTML</div>
                </div>
                <div className={styles.item}>
                    <img src={cssIconUrl} alt="CSS" className={styles.invertIcon} />
                    <div>CSS</div>
                </div>
                <div className={styles.item}>
                    <img src={jsIconUrl} alt="JavaScript" className={styles.invertIcon} />
                    <div>JavaScript</div>
                </div>
                <div className={styles.item}>
                    <img src={vercelUrl} alt="Vercel" className={styles.invertIcon} />
                    <div>Vercel</div>
                </div>
                <div className={styles.item}>
                    <img src={sqlUrl} alt="SQL Server" className={styles.invertIcon} />
                    <div>SQL Server</div>
                </div>
                <div className={styles.item}>
                    <img src={mySqlUrl} alt="MySQL" className={styles.invertIcon} />
                    <div>MySQL</div>
                </div>
                <div className={styles.item}>
                    <img src={sequelizeUrl} alt="Sequelize" className={styles.invertIcon} />
                    <div>Sequelize</div>
                </div>
                <div className={styles.item}>
                    <img src={nodeUrl} alt="Node.js" className={styles.invertIcon} />
                    <div>Node.js</div>
                </div>
                <div className={styles.item}>
                    <img src={mongoUrl} alt="MongoDB" className={styles.invertIcon} />
                    <div>Mongo DB</div>
                </div>
                <div className={styles.item}>
                    <img src={mongooseUrl} alt="Mongoose" className={styles.invertIcon} />
                    <div>Mongoose</div>
                </div>
                <div className={styles.item}>
                    <img src={efCoreUrl} alt=".NET" className={styles.invertIcon} />
                    <div>.NET</div>
                </div>
                <div className={styles.item}>
                    <img src={cloudflareUrl} alt="Cloudflare" className={styles.invertIcon} />
                    <div>Cloudflare</div>
                </div>
                <div className={styles.item}>
                    <img src={javaUrl} alt="Java" className={styles.invertIcon} />
                    <div>Java</div>
                </div>
                <div className={styles.item}>
                    <img src={gitUrl} alt="Git" className={styles.invertIcon} />
                    <div>Git</div>
                </div>
                <div className={styles.item}>
                    <img src={nextIconUrl} alt="Next.js" className={styles.invertIcon} />
                    <div>Next.js</div>
                </div>
                <div className={styles.item}>
                    <img src={reactIconUrl} alt="React" className={styles.invertIcon} />
                    <div>React</div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
