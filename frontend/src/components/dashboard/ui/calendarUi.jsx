import { ResponsiveTimeRange } from '@nivo/calendar';

// Custom color mapping based on status
const getColor = (status) => {
  switch (status) {
    case 'onProgress':
      return '#4caf50'; // Green
    case 'upcoming':
      return '#2196f3'; // Blue
    case 'overdue':
      return '#f44336'; // Red
    default:
      return '#2e2e2e'; // Default dark background
  }
};

const MyTimeRange = ({ data }) => {
  // Convert the data into the format Nivo expects, mapping status to color
  const processedData = data.map((d) => ({
    ...d,
    color: getColor(d.status),
  }));

  return (
    <ResponsiveTimeRange
      data={processedData}
      from="2025-01-01"
      to="2025-12-31"
      emptyColor="#2e2e2e"
      colors={(d) => d.color} // Use our custom color
      margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
      dayBorderWidth={1}
      dayBorderColor="#000000"
      weekdayLegendOffset={10}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 50,
          itemCount: 3,
          itemWidth: 80,
          itemHeight: 20,
          itemsSpacing: 20,
          symbolSize: 16,
          itemTextColor: '#ddd',
          data: [
            { label: 'On Progress', color: '#4caf50' },
            { label: 'Upcoming', color: '#2196f3' },
            { label: 'Overdue', color: '#f44336' },
          ],
        },
      ]}
      theme={{
        text: { fill: '#ffffff' },
        tooltip: {
          container: {
            background: '#1f1f1f',
            color: '#fff',
            fontSize: 12,
          },
        },
      }}
    />
  );
};

export default MyTimeRange;
