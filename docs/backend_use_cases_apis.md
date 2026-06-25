# System Use Cases & API Specifications (Student 2)

This document maps out system interactions, API endpoint signatures, and business validation rules.

---

## 1. Use Case Diagram
```
                     +---------------------------------------+
                     |  Sports Event Tracker System          |
                     |                                       |
  +---------------+  |   - Log new donation entry            |
  |               |  |   - Calculate donation item values    |
  |  Store Staff  +-----> - View sponsorships dashboard       |
  |               |  |                                       |
  +---------------+  |                                       |
                     |   - Update sponsorship statuses       |
  +---------------+  |   - Enforce budget validation rule    |
  |               |  |   - Monitor brand visibility logs     |
  |   Manager     +-----> - View ROI Reports & analytics      |
  |               |  |                                       |
  +---------------+  |                                       |
                     |   - Audit all status edits            |
                     |   - Configure budget constraints      |
                     +---------------------------------------+
```

---

## 2. API Specifications

### 2.1 Create Sponsorship Log Entry
* **Route**: `POST /api/sports_event_sponsorship_kit_donati`
* **Request Format**:
```json
{
  "event_name": "Kamala Nagar School Cricket Tournament",
  "event_date": "2026-07-10",
  "category": "School",
  "budget_limit": 25000.00,
  "items_donated": [
    { "name": "Cricket Kit Bag", "qty": 5, "unit_price": 3000.00 },
    { "name": "Stumps Sets", "qty": 4, "unit_price": 1200.00 }
  ],
  "brand_visibility_received": [
    { "type": "Banner", "details": "Boundary line banner 10x4ft" }
  ],
  "status": "Approved",
  "created_date": "2026-06-15",
  "notes": "Premium donation set for junior cricket matches."
}
```
* **Response Format (201 Created)**:
```json
{
  "success": true,
  "id": 101,
  "total_calculated_value": 19800.00,
  "status": "Approved",
  "message": "Sponsorship entry logged successfully and validation checks passed."
}
```
* **Response Format (400 Bad Request - Budget Exceeded Validation Error)**:
```json
{
  "success": false,
  "error": "BUDGET_OVERFLOW",
  "message": "Validation Failed: Total cost of items exceeds the approved sponsorship budget limit.",
  "details": {
    "approved_budget_limit": 25000.00,
    "calculated_total_cost": 29800.00,
    "exceeded_amount": 4800.00
  }
}
```

### 2.2 Get All Entries (Dashboard)
* **Route**: `GET /api/sports_event_sponsorship_kit_donati`
* **Filters**: `?status=Approved&category=School&search=Kamala`
* **Response Format (200 OK)**:
```json
[
  {
    "id": 101,
    "event_name": "Kamala Nagar School Cricket Tournament",
    "event_date": "2026-07-10",
    "category": "School",
    "total_calculated_value": 19800.00,
    "status": "Approved",
    "created_date": "2026-06-15"
  }
]
```

### 2.3 Get Specific Entry Details
* **Route**: `GET /api/sports_event_sponsorship_kit_donati/:id`
* **Response Format (200 OK)**:
```json
{
  "id": 101,
  "event_name": "Kamala Nagar School Cricket Tournament",
  "event_date": "2026-07-10",
  "category": "School",
  "budget_limit": 25000.00,
  "items_donated": [
    { "name": "Cricket Kit Bag", "qty": 5, "unit_price": 3000.00 },
    { "name": "Stumps Sets", "qty": 4, "unit_price": 1200.00 }
  ],
  "brand_visibility_received": [
    { "type": "Banner", "details": "Boundary line banner 10x4ft" }
  ],
  "status": "Approved",
  "created_date": "2026-06-15",
  "notes": "Premium donation set for junior cricket matches."
}
```

### 2.4 Update Entry Details / Status (Audit Trail Trigger)
* **Route**: `PUT /api/sports_event_sponsorship_kit_donati/:id`
* **Request Format**:
```json
{
  "status": "Completed"
}
```
* **Response Format (200 OK)**:
```json
{
  "success": true,
  "id": 101,
  "new_status": "Completed",
  "message": "Status updated. Audit log created."
}
```

---

## 3. Core Logic Engine Pseudocode
```python
def validate_and_process_donation(sponsorship_request):
    # Rule 1: Sum item values
    total_cost = 0
    for item in sponsorship_request.items_donated:
        if item.qty <= 0 or item.unit_price < 0:
            return ErrorResponse("Item values must be greater than zero.", status_code=400)
        total_cost += item.qty * item.unit_price

    # Rule 2: Budget enforcement check with detailed overflow calculation JSON output
    if total_cost > sponsorship_request.budget_limit:
        return ErrorResponse({
            "error": "BUDGET_OVERFLOW",
            "message": f"Validation Failed: Total cost of items exceeds the approved budget limit.",
            "details": {
                "approved_budget_limit": sponsorship_request.budget_limit,
                "calculated_total_cost": total_cost,
                "exceeded_amount": total_cost - sponsorship_request.budget_limit
            }
        }, status_code=400)

    # Rule 3: Enforce visibility data capture
    if not sponsorship_request.brand_visibility_received or len(sponsorship_request.brand_visibility_received) == 0:
        return ErrorResponse("Validation Failed: At least one brand visibility method must be defined.", status_code=400)

    # Save to database
    save_sponsorship_record(sponsorship_request, total_cost)
    
    # Save default Audit log
    write_audit_log(
        sponsorship_id=sponsorship_request.id,
        user="Staff",
        old_status=None,
        new_status=sponsorship_request.status,
        timestamp=now()
    )
    
    return SuccessResponse(total_cost, sponsorship_request.status)
```
