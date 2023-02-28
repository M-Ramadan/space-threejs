import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";
import baffle from "baffle";
import Tau from "../Tau";
import Intro from "./components/intro";

// function VideoText(props) {
//   const [video] = useState(() =>
//     Object.assign(document.createElement("video"), {
//       src: "/Motion-Graphics-ShowReel-2017.mp4",
//       crossOrigin: "Anonymous",
//       loop: true,
//       muted: true,
//     })
//   );
//   useEffect(() => void video.play(), [video]);
//   return (
//     <Text fontSize={3} letterSpacing={-0.06} {...props}>
//       HOPE
//       <meshBasicMaterial toneMapped={false}>
//         <videoTexture
//           attach="map"
//           args={[video]}
//           encoding={THREE.sRGBEncoding}
//         />
//       </meshBasicMaterial>
//     </Text>
//   );
// }

function App() {
  return (
    <>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      // <OrbitControls enableZoom={false} />
      <Intro />
      <ScrollControls pages={6} damping={0.1}>
        <Tau />

        <Scroll html style={{ width: "100%" }}>
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Tau
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              The International Space Station is a large spacecraft in orbit
              around Earth. It serves as a home where crews of astronauts and
              cosmonauts live. The space station is also a unique science
              laboratory. Several nations worked together to build and use the
              space station.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                space station, an artificial structure placed in orbit and
                having the pressurized enclosure, power, supplies, and
                environmental systems necessary to support human habitation for
                extended periods. Depending on its configuration, a space
                station can serve as a base for a variety of activities. These
                include observations of the Sun and other astronomical objects,
                study of Earth’s resources and environment, military
                reconnaissance, and long-term investigations of the behaviour of
                materials and biological systems—including human physiology and
                biochemistry—in a state of weightlessness, or microgravity.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
