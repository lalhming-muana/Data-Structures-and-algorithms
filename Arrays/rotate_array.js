var rotate = function (nums, k) {
	k %= nums.length
	if (k === 0) return nums

	nums.reverse()
	reverse(nums, 0, k - 1)
	reverse(nums, k, nums.length - 1)
}

const reverse = (array, start, end) => {
	while (start < end) {
		;[array[start], array[end]] = [array[end], array[start]]
		start++, end--
	}
}
