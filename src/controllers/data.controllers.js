import * as data from '../../enterprise-attack.json' assert {type: 'json'}
export const getData = async (req, res) => {

    try {
      return res.status(200).json({data})
    } catch (err) {
      return res.status(500).json({message: err.message})
    }
}
