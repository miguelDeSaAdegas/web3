import { useState } from 'react'

let etat = false;

const StatisticsLine = (props) => {
    const t = props.texte
    const value = props.value

    console.log("texte" + t);
    console.log("value" + value);

    if (t === "positive") {
        return (
            <tr>
                <td>{t}</td>
                <td>{isNaN(value) ? 0 : value}%</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{t}</td>
                <td>{isNaN(value) ? 0 : value}</td>
            </tr>
        )
    }

}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    const totalReviews = good + neutral + bad;
    const averageScore = (good - bad) / totalReviews;
    const positivePercentage = (good / totalReviews) * 100;

    if (etat) {
        return (
            <table>
                <h2>statistics</h2>
                <StatisticsLine texte="good" value={good} />
                <StatisticsLine texte="neutral" value={neutral} />
                <StatisticsLine texte="bad" value={bad} />
                <StatisticsLine texte="all" value={totalReviews} />
                <StatisticsLine texte="average" value={averageScore} />
                <StatisticsLine texte="positive" value={positivePercentage} />
            </table>
        )
    } else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

}

const Button = (props) => {
    const good = props.good
    const setGood = props.setGood
    const neutral = props.neutral
    const setNeutral = props.setNeutral
    const bad = props.bad
    const setBad = props.setBad

    const handleGood = () => {
        setGood(good + 1)
        etat = true
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
        etat = true
    }

    const handleBad = () => {
        setBad(bad + 1)
        etat = true
    }

    return (
        <div>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    //const [allReviews, setAll] = userState([])

    return (
        <div>
            <h2>give feedback</h2>
            <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App