#! /usr/bin/env node

const fs = require('fs')
const readline = require('readline')

const TAILWIND_CONFIG_FILE = "tailwind.config.js"
const DEFAULT_STEP = 100
const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const writeColor = (name, code, step) => {
  const FILE_PATH = `${process.env.PWD}/${TAILWIND_CONFIG_FILE}`
  const config = require(FILE_PATH)

  if (config.theme.extend.colors[name])
    throw 'This color already exists'

  config.theme.extend.colors[name] = {}
  Object.keys(HEX_OPACITY_TABLE).filter(e => e === 'DEFAULT' || Number(e) % step == 0).map(key =>
    config.theme.extend.colors[name][key] = `#${code.replace(/^#/, '').toLocaleLowerCase()}${HEX_OPACITY_TABLE[key]}`
  )

  fs.writeFileSync(FILE_PATH,
    `module.exports = ${JSON.stringify(config, null, 2)}`,
    'utf8'
  )
}

const main = () => {
  if (!fs.existsSync(TAILWIND_CONFIG_FILE)) {
    throw 'Config file not found :('
  }
  RL.question('Color name: ', (name) => {
    RL.question('Color code (no #): ', (code) => {
      RL.question(`Step (def=${DEFAULT_STEP}): `, (step) => {
        writeColor(name, code, Number(step) || DEFAULT_STEP)
        RL.close()
      })
    })
  })
}

try {
  main();
} catch (msg) {
  console.log(msg)
  process.exit(1)
}


const HEX_OPACITY_TABLE = {
  'DEFAULT': 'ff',
  '990': 'fc',
  '980': 'fa',
  '970': 'f7',
  '960': 'f5',
  '950': 'f2',
  '940': 'f0',
  '930': 'ed',
  '920': 'eb',
  '910': 'e8',
  '900': 'e6',
  '890': 'e3',
  '880': 'e0',
  '870': 'de',
  '860': 'db',
  '850': 'd9',
  '840': 'd6',
  '830': 'd4',
  '820': 'd1',
  '810': 'cf',
  '800': 'cc',
  '790': 'c9',
  '780': 'c7',
  '770': 'c4',
  '760': 'c2',
  '750': 'bf',
  '740': 'bd',
  '730': 'ba',
  '720': 'b8',
  '710': 'b5',
  '700': 'b3',
  '690': 'b0',
  '680': 'ad',
  '670': 'ab',
  '660': 'a8',
  '650': 'a6',
  '640': 'a3',
  '630': 'a1',
  '620': '9e',
  '610': '9c',
  '600': '99',
  '590': '96',
  '580': '94',
  '570': '91',
  '560': '8f',
  '550': '8c',
  '540': '8a',
  '530': '87',
  '520': '85',
  '510': '82',
  '500': '80',
  '490': '7d',
  '480': '7a',
  '470': '78',
  '460': '75',
  '450': '73',
  '440': '70',
  '430': '6e',
  '420': '6b',
  '410': '69',
  '400': '66',
  '390': '63',
  '380': '61',
  '370': '5e',
  '360': '5c',
  '350': '59',
  '340': '57',
  '330': '54',
  '320': '52',
  '310': '4f',
  '300': '4d',
  '290': '4a',
  '280': '47',
  '270': '45',
  '260': '42',
  '250': '40',
  '240': '3d',
  '230': '3b',
  '220': '38',
  '210': '36',
  '200': '33',
  '190': '30',
  '180': '2e',
  '170': '2b',
  '160': '29',
  '150': '26',
  '140': '24',
  '130': '21',
  '120': '1f',
  '110': '1c',
  '100': '1a',
  '90': '17',
  '80': '14',
  '70': '12',
  '60': '0f',
  '50': '0d',
  '40': '0a',
  '30': '08',
  '20': '05',
  '10': '03',
  '0': '00',
}