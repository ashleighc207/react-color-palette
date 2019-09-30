import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePaletteLevels(paletteColors) {
  let adjustedPalette = {
    paletteName: paletteColors.paletteName,
    id: paletteColors.id,
    emoji: paletteColors.emoji,
    colors: {}
  };

  for (let level of levels) {
    adjustedPalette.colors[level] = [];
  }
  for (let color of paletteColors.colors) {
    let scale = getScale(color.color, levels.length).reverse();
    for (let i in scale) {
      adjustedPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return adjustedPalette;
}

function generateSinglePaletteLevels(paletteColors, color) {
  let thisColor = "";
  paletteColors.colors.map(p => {
    if (p.name.toLowerCase() === color) {
      thisColor = p.color;
    }
  });

  let adjustedPalette = {
    paletteName: paletteColors.paletteName,
    id: paletteColors.id,
    emoji: paletteColors.emoji,
    levels: levels,
    colors: {}
  };

  for (let level of levels) {
    adjustedPalette.colors[level] = [];
  }

  let scale = getScale(thisColor, levels.length).reverse();
  for (let i in scale) {
    adjustedPalette.colors[levels[i]].push({
      name: `${color.name} ${levels[i]}`,
      id: color.toLowerCase().replace(/ /g, "-") + "-" + i,
      hex: scale[i],
      rgb: chroma(scale[i]).css(),
      rgba: chroma(scale[i])
        .css()
        .replace("rgb", "rgba")
        .replace(")", ",1.0)")
    });
  }
  return adjustedPalette;
}

function getRange(hexColor) {
  const endColor = "#ffffff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    endColor
  ];
}

function getScale(hexColor, num) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(num);
}

export { generatePaletteLevels, generateSinglePaletteLevels };
