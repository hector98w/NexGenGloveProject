import "./App.css";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import hand from "./hand.PNG";

function App() {
  const [speed, setSpeed] = useState(0);
  const [direction, setDirection] = useState(0);
  const [airTemp, setAT] = useState(0);
  const [humidity, setH] = useState(0);
  const [handTemp, setHT] = useState(0);
  const [data, setData] = useState("");

  const [Thumb01, set01] = useState("");
  const [Thumb02, set02] = useState("");
  const [Thumb03, set03] = useState("");

  const [Index04, set04] = useState("");
  const [Index05, set05] = useState("");
  const [Index06, set06] = useState("");

  const [Middle07, set07] = useState("");
  const [Middle08, set08] = useState("");
  const [Middle09, set09] = useState("");

  const [Ring10, set10] = useState("");
  const [Ring11, set11] = useState("");
  const [Ring12, set12] = useState("");

  const [Little13, set13] = useState("");
  const [Little14, set14] = useState("");
  const [Little15, set15] = useState("");

  const [Palm, setPalm] = useState("");
  const [Dorsal, setDorsal] = useState("");
  const [Wrist, setWrist] = useState("");

  const output = () => {
    switch (Number(direction)) {
      case 1:
        set01((24.43 * Math.pow(speed, 0.5431)).toFixed(2));
        set02((22.62 * Math.pow(speed, 0.5554)).toFixed(2));
        set03((16.87 * Math.pow(speed, 0.6483)).toFixed(2));

        set04((27.69 * Math.pow(speed, 0.6057)).toFixed(2));
        set05((23.36 * Math.pow(speed, 0.5812)).toFixed(2));
        set06((22.4 * Math.pow(speed, 0.5871)).toFixed(2));

        set07((26.16 * Math.pow(speed, 0.5791)).toFixed(2));
        set08((23.98 * Math.pow(speed, 0.5719)).toFixed(2));
        set09((21.57 * Math.pow(speed, 0.5791)).toFixed(2));

        set10((25.37 * Math.pow(speed, 0.5571)).toFixed(2));
        set11((25.06 * Math.pow(speed, 0.5596)).toFixed(2));
        set12((20.86 * Math.pow(speed, 0.5676)).toFixed(2));

        set13((26.97 * Math.pow(speed, 0.5525)).toFixed(2));
        set14((25.61 * Math.pow(speed, 0.5875)).toFixed(2));
        set15((23.32 * Math.pow(speed, 0.5811)).toFixed(2));

        setPalm((12.19 * Math.pow(speed, 0.6409)).toFixed(2));
        setDorsal((17.78 * Math.pow(speed, 0.4352)).toFixed(2));
        setWrist((14.1 * Math.pow(speed, 0.4462)).toFixed(2));
        break;

      case 2:
        set01((25.54 * Math.pow(speed, 0.5582)).toFixed(2));
        set02((22.3 * Math.pow(speed, 0.4998)).toFixed(2));
        set03((19.03 * Math.pow(speed, 0.4491)).toFixed(2));

        set04((26.96 * Math.pow(speed, 0.5709)).toFixed(2));
        set05((23.23 * Math.pow(speed, 0.5725)).toFixed(2));
        set06((21.6 * Math.pow(speed, 0.5818)).toFixed(2));

        set07((27.68 * Math.pow(speed, 0.5776)).toFixed(2));
        set08((24.52 * Math.pow(speed, 0.5703)).toFixed(2));
        set09((21.39 * Math.pow(speed, 0.5931)).toFixed(2));

        set10((27.02 * Math.pow(speed, 0.5584)).toFixed(2));
        set11((25.04 * Math.pow(speed, 0.5572)).toFixed(2));
        set12((20.65 * Math.pow(speed, 0.5854)).toFixed(2));

        set13((29.64 * Math.pow(speed, 0.5555)).toFixed(2));
        set14((25.78 * Math.pow(speed, 0.5774)).toFixed(2));
        set15((23.4 * Math.pow(speed, 0.578)).toFixed(2));

        setPalm((17.98 * Math.pow(speed, 0.4401)).toFixed(2));
        setDorsal((12.17 * Math.pow(speed, 0.6717)).toFixed(2));
        setWrist((13.77 * Math.pow(speed, 0.4596)).toFixed(2));
        break;

      case 3:
        set01((28.58 * Math.pow(speed, 0.5658)).toFixed(2));
        set02((25.42 * Math.pow(speed, 0.5123)).toFixed(2));
        set03((22.49 * Math.pow(speed, 0.5214)).toFixed(2));

        set04((27.8 * Math.pow(speed, 0.6077)).toFixed(2));
        set05((22.85 * Math.pow(speed, 0.5928)).toFixed(2));
        set06((21.62 * Math.pow(speed, 0.5571)).toFixed(2));

        set07((28.37 * Math.pow(speed, 0.6875)).toFixed(2));
        set08((18.43 * Math.pow(speed, 0.7872)).toFixed(2));
        set09((15.82 * Math.pow(speed, 0.6648)).toFixed(2));

        set10((23.89 * Math.pow(speed, 0.9464)).toFixed(2));
        set11((11.79 * Math.pow(speed, 1.169)).toFixed(2));
        set12((7.3 * Math.pow(speed, 1.09)).toFixed(2));

        set13((22.87 * Math.pow(speed, 0.7745)).toFixed(2));
        set14((14.99 * Math.pow(speed, 0.9446)).toFixed(2));
        set15((12.34 * Math.pow(speed, 0.9003)).toFixed(2));

        setPalm((12.99 * Math.pow(speed, 0.7191)).toFixed(2));
        setDorsal((14.08 * Math.pow(speed, 0.4943)).toFixed(2));
        setWrist((13.52 * Math.pow(speed, 0.4905)).toFixed(2));
        break;

      case 4:
        set01((22.83 * Math.pow(speed, 0.5839)).toFixed(2));
        set02((17.23 * Math.pow(speed, 0.5208)).toFixed(2));
        set03((12.12 * Math.pow(speed, 0.5735)).toFixed(2));

        set04((26.18 * Math.pow(speed, 0.7606)).toFixed(2));
        set05((15.69 * Math.pow(speed, 1.048)).toFixed(2));
        set06((10.68 * Math.pow(speed, 0.7675)).toFixed(2));

        set07((27.82 * Math.pow(speed, 0.7286)).toFixed(2));
        set08((12.46 * Math.pow(speed, 1.069)).toFixed(2));
        set09((9.27 * Math.pow(speed, 1.025)).toFixed(2));

        set10((28.35 * Math.pow(speed, 0.6749)).toFixed(2));
        set11((21.81 * Math.pow(speed, 0.6265)).toFixed(2));
        set12((19.13 * Math.pow(speed, 0.5901)).toFixed(2));

        set13((27.71 * Math.pow(speed, 0.5718)).toFixed(2));
        set14((25.01 * Math.pow(speed, 0.5737)).toFixed(2));
        set15((22.79 * Math.pow(speed, 0.5487)).toFixed(2));

        setPalm((12.84 * Math.pow(speed, 0.6146)).toFixed(2));
        setDorsal((12.42 * Math.pow(speed, 0.479)).toFixed(2));
        setWrist((13.7 * Math.pow(speed, 0.4315)).toFixed(2));
        break;

      default:
        console.log("no input!");
    }
  };

  const submit = () => {
    output();
    var data = [
      ["", "Fingertrip", Thumb01],
      ["Thumb", "Middle of finger", Thumb02],
      ["", "Finger root", Thumb03],
      [],
      ["", "Fingertrip", Index04],
      ["Index", "Middle of finger", Index05],
      ["", "Finger root", Index06],
      [],
      ["", "Fingertrip", Middle07],
      ["Middle", "Middle of finger", Middle08],
      ["", "Finger root", Middle09],
      [],
      ["", "Fingertrip", Ring10],
      ["Ring", "Middle of finger", Ring11],
      ["", "Finger root", Ring12],
      [],
      ["", "Fingertrip", Little13],
      ["Little", "Middle of finger", Little14],
      ["", "Finger root", Little15],
      [],
      ["Palm", Palm],
      ["Dorsal", Dorsal],
      ["Wrist", Wrist],
    ];
    setData(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-header">Input</div>
              <div className="card-body">
                <h6 className="card-title">Wind speed(m/s)</h6>
                <p className="card-text">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Input the wind speed"
                    required
                    onChange={(e) => setSpeed(e.target.value)}
                  />
                </p>

                <h6 className="card-title">Wind direction</h6>
                <p className="card-text">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setDirection(e.target.value)}
                  >
                    <option>Click to choose</option>
                    <option value="1">Dorsal to Wind</option>
                    <option value="2">Palm to Wind</option>
                    <option value="3">Thumb to Wind</option>
                    <option value="4">Little to Wind</option>
                  </select>
                </p>

                <h6 className="card-title">Air Temprature(&deg;C)</h6>
                <p className="card-text">
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={24}
                    required
                    onChange={(e) => setAT(e.target.value)}
                  />
                </p>

                <h6 className="card-title">Humidity(%)</h6>
                <p className="card-text">
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={65}
                    required
                    onChange={(e) => setH(e.target.value)}
                  />
                </p>

                <h6 className="card-title">Hand Temperature(&deg;C)</h6>
                <p className="card-text">
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={37}
                    required
                    onChange={(e) => setHT(e.target.value)}
                  />
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Output</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={hand} alt="hand " />
                  </div>
                  <div className="col-sm-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row">
                            h<sub>c</sub> (W/(m<sup>2</sup>K))
                          </th>
                          <th>Value</th>
                        </tr>
                        <tr>
                          <th scope="row">Palm</th>
                          <td>{Palm}</td>
                        </tr>
                        <tr>
                          <th>Dorsal</th>
                          <td>{Dorsal}</td>
                        </tr>
                        <tr>
                          <th>Wrist</th>
                          <td>{Wrist}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        h<sub>c</sub> (W/(m<sup>2</sup>K))
                      </th>
                      <th scope="col">Fingertip</th>
                      <th scope="col">Middle of finger</th>
                      <th scope="col">Finger root</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Thumb</th>
                      <td>{Thumb01}</td>
                      <td>{Thumb02}</td>
                      <td>{Thumb03}</td>
                    </tr>
                    <tr>
                      <th scope="row">Index</th>
                      <td>{Index04}</td>
                      <td>{Index05}</td>
                      <td>{Index06}</td>
                    </tr>
                    <tr>
                      <th scope="row">Middle</th>
                      <td>{Middle07}</td>
                      <td>{Middle08}</td>
                      <td>{Middle09}</td>
                    </tr>
                    <tr>
                      <th scope="row">Ring</th>
                      <td>{Ring10}</td>
                      <td>{Ring11}</td>
                      <td>{Ring12}</td>
                    </tr>
                    <tr>
                      <th scope="row">Little</th>
                      <td>{Little13}</td>
                      <td>{Little14}</td>
                      <td>{Little15}</td>
                    </tr>
                  </tbody>
                </table>

                <CSVLink
                  className="btn btn-primary"
                  data={data}
                  onClick={() => submit()}
                >
                  Download
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
