/** @jsx jsx */
/* eslint-disable react/display-name */
import { Flex, jsx } from 'theme-ui';

import {
  WiCloudHailGusty,
  WiCloudLightningGusty,
  WiCloudRainGusty,
  WiCloudRainWind,
  WiCloudShowerWind,
  WiDayCloudHailGusty,
  WiDayCloudRainGusty,
  WiDayCloudRainWind,
  WiDayCloudShowerWind,
  WiDayFog,
  WiLightning,
  WiShowersFog,
  WiThunderstormGusty,
} from 'weather-hex/src/weather/CustomIcons';

export const WeatherIcons = (): JSX.Element => (
  <Flex
    sx={{
      borderRadius: 4,
      py: '1',
      background: '#eef',
      alignContent: 'center',
      justifyContent: 'space-evenly',
    }}
  >
    <WiCloudHailGusty size={40} />
    <WiCloudLightningGusty size={40} />
    <WiCloudRainGusty size={40} />
    <WiCloudRainWind size={40} />
    <WiCloudShowerWind size={40} />
    <WiDayCloudHailGusty size={40} />
    <WiDayCloudRainGusty size={40} />
    <WiDayCloudRainWind size={40} />
    <WiDayCloudShowerWind size={40} />
    <WiDayFog size={40} />
    <WiLightning size={40} />
    <WiShowersFog size={40} />
    <WiThunderstormGusty size={40} />
  </Flex>
);

import App from 'weather-hex/src/App';

export const WeatherHexApp = (): JSX.Element => (
  <Flex
    sx={{
      height: '550px',
      mx: 'auto',
      borderWidth: 1,
      borderColor: 'muted',
      borderStyle: 'solid',
      borderRadius: 4,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <App />
  </Flex>
);
