package mohu.utils;

/**
 * ...
 * @author Tim Kendrick
 */

class ArrayUtils {

	public static inline function indexOf(array:Array<Dynamic>, object:Dynamic) {
		var i:Int = -1;
		while (++i < array.length) if (array[i] == object) break;
		return (i < array.length ? i : -1);
	}

	public static inline function contains(array:Array<Dynamic>, object:Dynamic) {
		var i:Int = -1;
		while (++i < array.length) if (array[i] == object) break;
		return (i < array.length);
	}
	
}