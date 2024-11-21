import React from "react";
import ReactDOM from "react-dom";
import PieChartIndicator from "./components/PieChartIndicator";
import BigNumberIndicator from "./components/BigNumberIndicator";
import EventMap from "./components/EventMap"; // Importa o mapa
import 'bootstrap/dist/css/bootstrap.min.css';

// Dados para os gráficos
const pieData = [
  { name: "Presenciais", value: 55 },
  { name: "Online", value: 24 },
  { name: "Híbrido", value: 12 },
];

const bigNumberData = { title: "Eventos Totais", value: 42 };

ReactDOM.render(
  <div
    style={{
      margin: "10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "flex-start", // Centraliza verticalmente
    }}
  >
    {/* Índice 1 */}
    <div
      style={{
        marginBottom: "20px",
        width: "30%", // Ajusta largura proporcional
        textAlign: "center",
        minWidth: "250px", // Para evitar que os itens fiquem muito pequenos
      }}
    >
      <h2>Índice 1: Quantidade de eventos de inovação e tecnologia</h2>
      <h2 style={{ color: "white" }}>Um gráfico BigNumber</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <BigNumberIndicator title={bigNumberData.title} value={bigNumberData.value} />
    </div>

    {/* Índice 2 */}
    <div
      style={{
        marginBottom: "20px",
        width: "30%",
        textAlign: "center",
        minWidth: "250px",
      }}
    >
      <h2>Índice 2: Distribuição entre eventos presenciais e online</h2>
      <h2 style={{ color: "white" }}>Um gráfico Pie</h2>
      <br/>
      <br/>
      <br/>
      <PieChartIndicator data={pieData} title="" />
    </div>

    {/* Índice 3 */}
    <div
      style={{
        marginBottom: "20px",
        width: "30%", // Mesmo tamanho dos outros itens
        textAlign: "center",
        minWidth: "250px",
      }}
    >
      <h2>Índice 3: Mapa dos locais dos eventos</h2>
      <h2 style={{ color: "white" }}>Um mapa de eventos focado em Brasília</h2>
      <EventMap />
    </div>
  </div>,
  document.getElementById("root")
);
