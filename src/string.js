export function safeTrim(input) {
    if (input == null) return "";
    return String(input).trim();
}
