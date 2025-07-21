import { ResponsivePie } from '@nivo/pie';

const MyPie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 40, left: 120 }} // More space for left legend
        innerRadius={0.6}
        padAngle={1}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}

        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#e0e0e0"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}

        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}

        legends={[
            {
                anchor: 'left',
                direction: 'column',
                translateX: -100,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: '#e0e0e0',
                symbolSize: 14,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#ffffff',
                            itemBackground: '#333'
                        }
                    }
                ]
            }
        ]}
        theme={{
            tooltip: {
                container: {
                    background: '#1a1a1a',
                    color: '#fff',
                    fontSize: 12,
                    borderRadius: '6px',
                    padding: '8px'
                }
            },
            labels: {
                text: {
                    fill: '#ffffff'
                }
            },
            legends: {
                text: {
                    fontSize: 12
                }
            }
        }}
    />
);

export default MyPie;
