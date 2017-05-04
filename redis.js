// 启动 Redis
redis-server
// 查看 redis 是否启动？
redis-cli

 SET runoobkey redis
 DEL runoobkey

List

BLPOP key1 [key2 ] timeout
移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
2	BRPOP key1 [key2 ] timeout
移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
3	BRPOPLPUSH source destination timeout
从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
4	LINDEX key index
通过索引获取列表中的元素
5	LINSERT key BEFORE|AFTER pivot value
在列表的元素前或者后插入元素
6	LLEN key
获取列表长度
7	LPOP key
移出并获取列表的第一个元素
8	LPUSH key value1 [value2]
将一个或多个值插入到列表头部
9	LPUSHX key value
将一个或多个值插入到已存在的列表头部
10	LRANGE key start stop
获取列表指定范围内的元素
11	LREM key count value
移除列表元素
12	LSET key index value
通过索引设置列表元素的值
13	LTRIM key start stop
对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。
14	RPOP key
移除并获取列表最后一个元素
15	RPOPLPUSH source destination
移除列表的最后一个元素，并将该元素添加到另一个列表并返回
16	RPUSH key value1 [value2]
在列表中添加一个或多个值
17	RPUSHX key value
为已存在的列表添加值

set

1	SADD key member1 [member2]
向集合添加一个或多个成员
2	SCARD key
获取集合的成员数
3	SDIFF key1 [key2]
返回给定所有集合的差集
4	SDIFFSTORE destination key1 [key2]
返回给定所有集合的差集并存储在 destination 中
5	SINTER key1 [key2]
返回给定所有集合的交集
6	SINTERSTORE destination key1 [key2]
返回给定所有集合的交集并存储在 destination 中
7	SISMEMBER key member
判断 member 元素是否是集合 key 的成员
8	SMEMBERS key
返回集合中的所有成员
9	SMOVE source destination member
将 member 元素从 source 集合移动到 destination 集合
10	SPOP key
移除并返回集合中的一个随机元素
11	SRANDMEMBER key [count]
返回集合中一个或多个随机数
12	SREM key member1 [member2]
移除集合中一个或多个成员
13	SUNION key1 [key2]
返回所有给定集合的并集
14	SUNIONSTORE destination key1 [key2]
所有给定集合的并集存储在 destination 集合中
15	SSCAN key cursor [MATCH pattern] [COUNT count]
迭代集合中的元素
