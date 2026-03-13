import { PulseLoader } from "react-spinners";
/**
 * @param {Object} props
 * @param {boolean} [props.loading]
 * @param {string} [props.color]
 * @param {number} [props.speedMultiplier]
 * @param {number} [props.size]
 * @param {number} [props.margin]
 */
export default function Loader({ loading = true, color, speedMultiplier, size, margin }) {
  return (
    <PulseLoader
      size={size}
      loading={loading}
      color={color}
      speedMultiplier={speedMultiplier}
      margin={margin}
    />
  );
}
