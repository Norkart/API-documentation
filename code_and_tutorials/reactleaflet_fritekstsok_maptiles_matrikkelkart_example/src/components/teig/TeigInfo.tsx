import { Typography } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { selectedTeig, Teig } from "../../state/state"

export const TeigInfo = () => {
    const teig = useRecoilValue<Teig | null>(selectedTeig)

    if (!teig) return null;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption"  >
                Areal: {teig.BeregnetAreal} m<sup>2</sup>
            </Typography>
            <Typography variant="caption" >
                Kommunenummer: {teig.Kommunenummer}
            </Typography>
            <Typography variant="caption" >
                Gaardsnummer: {teig.Gaardsnummer}
            </Typography>
            <Typography variant="caption" >
                Bruksnummer: {teig.Bruksnummer}
            </Typography>
            <Typography variant="caption" >
                Festenummer: {teig.Festenummer}
            </Typography>
            <Typography variant="caption" >
                Seksjonsnummer: {teig.Seksjonsnummer}
            </Typography>
        </div>

    )
}
