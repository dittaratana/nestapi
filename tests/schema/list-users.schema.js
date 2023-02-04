export const VALID_PARAMS = {
    "type": "object",
    "default": {},
    "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
    ],
    "properties": {
        "page": {
            "type": "integer",
            "default": 0
        },
        "per_page": {
            "type": "integer",
            "default": 0
        },
        "total": {
            "type": "integer",
            "default": 0
        },
        "total_pages": {
            "type": "integer",
            "default": 0
        },
        "data": {
            "type": "array",
            "default": []
        },
        "support": {
            "type": "object",
            "default": {},
            "required": [
                "url",
                "text"
            ],
            "properties": {
                "url": {
                    "type": "string",
                    "default": ""
                },
                "text": {
                    "type": "string",
                    "default": ""
                }
            }
        }
    }
}