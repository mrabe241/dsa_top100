//2622. Cache With Time Limit - Leetcode -- https://leetcode.com/problems/cache-with-time-limit/description/ Medium
//Approach
//Use setTimeout to set cache for the duration
var TimeLimitedCache = function() {
    this.cache=new Map();

};
TimeLimitedCache.prototype.set = function(key, value, duration) 
{
        const hasKey=this.cache.has(key)
        if(hasKey)
        clearTimeout(this.cache.get(key).time)
        this.cache.set(key,
                       {
                        value:value,
                        time:setTimeout(()=> this.cache.delete(key),duration)
                       })
};
TimeLimitedCache.prototype.get = function(key)
{
  return this.cache.has(key)?this.cache.get(key).value:-1
}
TimeLimitedCache.prototype.count = function()
{
  return this.cache.size;
}
