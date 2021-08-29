
import Colors from "./Colors"
import AddColor from "./AddColor"
import Random from "./Random"

const Controls = () => (
    <div
        style={{
            background: "rgba(0,0,0,.10)",
            maxWidth: "640px",
            borderRadius: "8px",
            margin: "auto",
            padding: "32px",
        }}
    >
        <Random />
        <Colors />
        <AddColor />

    </div>
)

export default Controls