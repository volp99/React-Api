import GaugeChart from 'react-advanced-gauge-chart';
const Radial=() =>{
    return(
<div className="manometro">
        <GaugeChart id="gauge-chart5"
                    nrOfLevels={420}
                    arcsLength={[0.2, 0.2, 0.7, 0.2, 0.2]}
                    colors={['#EA4228','#F5CD19', '#5BE12C', '#F5CD19', '#EA4228']}
                    percent={0.27}
                    hideText={true}
                    arcPadding={0.01}
        />
</div>

    )
}
export default Radial;