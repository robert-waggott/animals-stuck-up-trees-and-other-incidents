import styles from "./about.module.scss";

export const About = () => {
    return (
        <div className={styles.about}>
            <h1>About</h1>

            <p>This is an ongoing personal development task more than anything so I can keep my typescript, node/nestJS skills, and React skills up to date and current whilst working on work projects that sit outside of that ecosystem.</p>

            <p>The data is an London Fire Brigade (LFB) dataset containing data of when and where the LFB have responded to incidents involving cats stuck up trees, and other incidents involving animals. I originally thought it would be interesting to map the data.</p>

            <p>The dataset can be found <a href="https://data.london.gov.uk/dataset/animal-rescue-incidents-attended-by-lfb" target="_blank" rel="noreferrer">here</a>. I originally found this dataset, and other equally interesting datasets from the <a href="https://www.data-is-plural.com/" target="_blank" rel="noreferrer">data is plural newsletter</a>.</p>
        </div>
    );
};
