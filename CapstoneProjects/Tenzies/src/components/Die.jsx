export default function Die(prop) {
    const styles = {
        backgroundColor: prop.isHeld ? '#59E391' : 'white'
    }

    return (
        <>
            <button style={styles}>{prop.value}</button>
        </>
    )
}