/* eslint-disable no-undef */
import X2JS from 'xml-json-parser'

const converter = new X2JS()

export default {
  filterByGroup: (channels, groupId) => {
    if (!channels || !groupId) return channels
    return channels.filter(c => {
      const groups = c.channelData.groups.group
      if (groups && groups.filter) {
        return groups.filter((g => g.id === groupId)).length >= 1
      }
      return groups.id === groupId
    })
  },
  getChannels: () => {
    return fetch('/widget.xml')
      .then(response => response.text())
      .then(data => converter.xml_str2json(data))
      .then(json => json.rss.channel.item)
  },
  getChannelsGroup: () => {
    return fetch('/widget.xml')
      .then(response => response.text())
      .then(data => converter.xml_str2json(data))
      .then(json => json.rss.channel.groups.group)
  },
  filterByAlert: (channels) => {
    if (!channels) return channels
    return channels.filter(c => c.channelData.alert.type !== '16')
  },
  hasCriticalAlert: (channels) => {
    if (!channels) return false
    return !!channels.find(c => c.channelData.alert.type === '32')
  }
}
