#! /usr/bin/env node

import { clear } from 'node:console';

import minimist from 'minimist';
import chalk from 'chalk';

import Logo from './components/Logo';
import Time from './components/Time';
import Weather from './components/Weather';
import getWeather from './services/getWeather';

async function cli() {
  const args = minimist(process.argv, {
    default: {
      f: 'h:m',
    },
    alias: {
      f: 'format',
      l: 'location',
      h: 'help',
    },
  });

  if ((!args.location && args.format === 'h:m') || args.help) {
    console.log(
      chalk.cyan('> Show you some util infos (weather, time...)'),
      chalk.green('\n> Usage: infy [options]'),
      chalk.cyan('\n\n> Options: -f --format, -l --location'),
    );
    process.exit(0);
  }

  if (!args.location) {
    console.warn(
      chalk.yellow('[infy] missing location arg -l'),
    );
    process.exit(9);
  }

  clear();

  new Logo('Infy').show();

  const time = new Time(args.format);

  const weather = new Weather(await getWeather(args.location));

  console.log({
    time: time.now,
    weather: weather.now,
  });
}

cli();
