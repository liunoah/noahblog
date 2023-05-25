// 调用 API
import { getTest } from '@/api/test'   
export default {
    data() {
        return {
            test: ''
        }
    },
    methods: {
        async getTest() {
            const res = await getTest()
            this.test = res.data
        