import { shapeValue } from "../utils/data";
import { ActiveInactiveList, BlockData } from "../utils/types";

export function stackArray(array: ActiveInactiveList[], columns = 4) {
	const stackedArray: ActiveInactiveList[] = [...array];

	let sum = 0,
		nextCarryIndexes: number[] = [],
		currentCarryIndexes: number[] = [];

	function setUpNextRow() {
		sum = 0;
		currentCarryIndexes = [...nextCarryIndexes];
		nextCarryIndexes = [];
	}

	function searchAndReplace(i: number, size = 1) {
		const from = i + 1;

		if (from === stackedArray.length) return;
		else {
			const cellPos = search(stackedArray, size, from);
			swap(stackedArray, i, cellPos);
		}
	}

	function searchReplaceAndRegister(i: number, size = 1) {
		const from = i + 1;

		if (from === stackedArray.length) return;
		else {
			const cellPos = search(stackedArray, size, from);

			if (shapeValue[stackedArray[cellPos].shape][1] === 2) {
				const currentPos = sum - shapeValue[stackedArray[i].shape][0];
				nextCarryIndexes = [...nextCarryIndexes, currentPos];
			}

			swap(stackedArray, i, cellPos);
		}
	}

	for (let i = 0; i < stackedArray.length; i++) {
		if (currentCarryIndexes.length > 0) {
			if (currentCarryIndexes[0] === sum) {
				currentCarryIndexes.shift();
				--i;

				if (sum === columns - 1) setUpNextRow();
				else sum++;

				continue;
			} else if (
				shapeValue[stackedArray[i].shape][0] === 2 &&
				sum === currentCarryIndexes[0] - 1
			) {
				searchAndReplace(i);
			}
		}

		sum += shapeValue[stackedArray[i].shape][0];

		if (shapeValue[stackedArray[i].shape][1] === 2) {
			const currentPos = sum - shapeValue[stackedArray[i].shape][0];
			nextCarryIndexes = [...nextCarryIndexes, currentPos];
		}

		if (sum >= columns) {
			if (sum > columns) {
				searchReplaceAndRegister(i);
			}

			setUpNextRow();
		}
	}

	return stackedArray;
}

function search(array: BlockData[], cellValue: number, from: number): number {
	let pos = from;

	for (let i = from; i < array.length; i++) {
		if (shapeValue[array[i].shape][0] === cellValue) {
			pos = i;
			break;
		}
	}
	return pos;
}

function swap(array: BlockData[], index1: number, index2: number) {
	[array[index1], array[index2]] = [array[index2], array[index1]];
}
