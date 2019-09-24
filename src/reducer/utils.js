import { Map } from 'immutable'

export function arrToMap(arr, DataRecord){
	return arr.reduce(
		(acc, item) => acc.set(item.id, new DataRecord(item)),	
		new Map({})
	)
}
