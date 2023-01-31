import axios from 'axios'
import config from '@/config/index'

export const getRepoList = () => {
  return axios.get(
    `https://gitlab.jiniutech.com/api/v4/projects?private_token=${config.ACCESS_TOKEN}`
  )
}

export const getFileByPath = (id, path) => {
  return axios.get(
    `https://gitlab.jiniutech.com/api/v4/projects/${id}/files/${encodeURIComponent(
      path
    )}?private_token=${config.ACCESS_TOKEN}&ref=complete`
  )
}
