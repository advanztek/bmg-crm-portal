import { radius, spacing } from "@/lib/theme";
import { useColor } from "@/contexts/color";
import { Box, Stack, Typography } from "@mui/material";
import { DismissRegular } from "@fluentui/react-icons";

/**
 * @typedef {Object} FileStatusProps
 * @property {"audio" | "image" | "video" | "document"} type
 * @property {string} name
 * @property {string} size
 * @property {() => void} onClick
 * @property {any} [ActionIcon]
 */

/**
 * @param {FileStatusProps} props
 */
export default function FileStatus({
    type,
    name,
    size,
    onClick,
    ActionIcon = DismissRegular,
}) {
    const { bg, border, fg } = useColor();

    /** @type {Record<"audio" | "image" | "video" | "document", string>} */
    const icons = {
        audio: "audio.webp",
        video: "video.webp",
        image: "image.webp",
        document: "doc.webp",
    };

    return (
        <Stack
            direction="row"
            gap={spacing[2]}
            sx={{
                backgroundColor: bg.tertiary,
                padding: spacing[3],
                borderRadius: radius[5],
                border: `1px solid ${border.tertiary}`,
            }}
        >
            <Box component="img" src={`/${icons[type]}`} height="36px" />
            <Stack flex={1}>
                <Typography fontWeight={600}>
                    {name.length > 30
                        ? `${name.slice(0, 15)}...${name.slice(-14)}`
                        : name}
                </Typography>
                <Typography fontWeight={500} variant="caption" color={fg.secondary}>
                    {size}
                </Typography>
            </Stack>
            <ActionIcon
                size={22}
                color={fg.tertiary}
                style={{ cursor: "pointer" }}
                onClick={onClick}
            />
        </Stack>
    );
}