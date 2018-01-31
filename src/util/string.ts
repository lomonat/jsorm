const underscore = function(str) {
  return str.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}

const camelizeSnakeCase = function(str) {
  return str.replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');});
}

const camelizeKebabCase = function(str) {
  return str.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
}

const camelize = function(str) {
  return camelizeSnakeCase(camelizeKebabCase(str));
}

const decamelize = function(str) {
  return str.replace(/([A-Z])/g, function($1){return $1.replace($1,'_' + $1).toLowerCase();});
}

export { underscore, camelize, decamelize };
