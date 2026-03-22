import { writeFile } from 'fs'
import { promisify } from 'util'
import theme from './lucy/theme.mjs'
import colors from './lucy/colors.mjs'

const promisifiedWriteFile = promisify(writeFile);

const buildTheme = async () => {
  try {
    const themeWithColors = theme({
      'name': 'Lucy Evening Cursor',
      'colors': colors
    });

    await promisifiedWriteFile(
      './dist/lucy-evening-cursor.json',
      JSON.stringify(themeWithColors, null, 2)
    );
    console.log('🌺 Theme built. 💅');
  } catch (error) {
    console.log(error);
  }
};

buildTheme()
