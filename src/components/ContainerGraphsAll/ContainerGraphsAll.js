import React from "react";
import WidgetIpc from "../../components/WidgetIpc";
import WidgetIpcAllData from "../../components/WidgetIpcAllData";
const ContainerGraphsAll = () => {
  return (
    <div>
      <h1>Índice de Precios y Cotizaciones</h1>
      <div>
        <span>Los datos se han filtrado en relación al cambio de precio </span>
        <WidgetIpc />
      </div>

      <div>
        <span>Los datos se muestran si variacion de precio </span>
        <WidgetIpcAllData />
      </div>
    </div>
  );
};

export default ContainerGraphsAll;
