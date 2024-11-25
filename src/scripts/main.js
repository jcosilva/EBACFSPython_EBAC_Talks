AOS.init();

const DataDoEvento = new Date("Dec 25, 2025 19:00:00");
const TimeStampDoEvento = DataDoEvento.getTime();

const ContaAsHoras = setInterval(function() {
    const Agora = new Date();
    const TimeStampAtual = Agora.getTime();

    const DistanciaAteOEvento = TimeStampDoEvento - TimeStampAtual;

    if(DistanciaAteOEvento < 0) {
        clearInterval(ContaAsHoras);
        document.getElementById('contador').innerHTML = "Evento expirado!";
    } else {
        const DiaEmMs = 1000 * 60 * 60 * 24;
        const HoraEmMs = 1000 * 60 * 60;
        const MinutoEmMs = 1000 * 60;
        const SegundosEmMs = 1000;
    
        const DiasAteOEvento = Math.floor(DistanciaAteOEvento / DiaEmMs);
        const HorasAteOEvento = Math.floor((DistanciaAteOEvento % DiaEmMs) / HoraEmMs);
        const MinutosAteOEvento = Math.floor((DistanciaAteOEvento % HoraEmMs) / MinutoEmMs);
        const SegundosAteOEvento = Math.floor((DistanciaAteOEvento % MinutoEmMs) / SegundosEmMs);
        
        document.getElementById('contador').innerHTML = `${DiasAteOEvento}d ${HorasAteOEvento}h ${MinutosAteOEvento}m ${SegundosAteOEvento}s`;
    }
}, 1000);