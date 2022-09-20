/*
 * @Author: liziwei01
 * @Date: 2022-09-20 04:56:08
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 05:42:00
 * @Description: file content
 */
import redis from "redis"

const REDIS_IP = "localhost"
const REDIS_PORT = process.env.REDIS_PORT || 6379

var client

function Init() {
	client = redis.createClient(REDIS_PORT, REDIS_IP);
}

function get(key) {
	
}

function set(key, val) {

}

export { Init }