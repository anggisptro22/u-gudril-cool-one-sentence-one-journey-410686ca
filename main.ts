import { mkdirSync, writeFileSync } from 'node:fs';

const sentence = "Fleeing the low thrum of the turnpike diner, she hauled her aching boots up the scree slope until crushed juniper bruised the air, and the black Atlantic broke open against the cliffs below.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', sentence + '\n', 'utf8');
console.log(sentence);
